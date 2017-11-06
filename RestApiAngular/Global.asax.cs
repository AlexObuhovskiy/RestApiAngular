using System.Data.Entity;
using System.Web.Http;
using RestApiAngular.Models;
using WebApiContrib.Formatting.Jsonp;

namespace RestApiAngular
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            // Возможность вызвать метод из другого приложения (кроссдоменные запросы (только Get))
            GlobalConfiguration.Configuration.AddJsonpFormatter();
            Database.SetInitializer(new BookDbInitializer());
            GlobalConfiguration.Configure(WebApiConfig.Register);
        }
    }
}
