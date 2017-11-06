using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Results;
using RestApiAngular.Filters;
using RestApiAngular.Models;

namespace RestApiAngular.Controllers
{
    public class BooksController : ApiController
    {
        BookContext db = new BookContext();

        public JsonResult<DbSet<Book>> GetBooks()
        {
            return Json(db.Books);
        }

        public Book GetBook(int id)
        {
            Book book = db.Books.Find(id);
            return book;
        }

        [Route("api/values/authors")]
        [CustomAuthentication]
        public IEnumerable<string> GetAuthors()
        {
            return db.Books.Select(b => b.Author).Distinct();
        }

        [CustomAction]
        [Route("api/values/{id}/author")]
        public string GetAuthor(int id)
        {
            Book b = db.Books.Find(id);
            if (b != null)
                return b.Author;
            return "";
        }

        [HttpPost]
        public void CreateBook([FromBody]Book book)
        {
            db.Books.Add(book);
            db.SaveChanges();
        }

        [HttpPut]
        public void EditBook(int id, [FromBody]Book book)
        {
            if (id == book.Id)
            {
                db.Entry(book).State = EntityState.Modified;

                db.SaveChanges();
            }
        }

        public void DeleteBook(int id)
        {
            Book book = db.Books.Find(id);
            if (book != null)
            {
                db.Books.Remove(book);
                db.SaveChanges();
            }
        }
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
