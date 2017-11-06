using System.Data.Entity;

namespace RestApiAngular.Models
{
    public class BookContext : DbContext
    {
        public DbSet<Book> Books { get; set; }
    }
}
