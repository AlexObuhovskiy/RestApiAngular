using System;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace RestApiAngular.Filters
{
    public class CustomActionAttribute : ActionFilterAttribute
    {
        private DateTime start;

        public override Task OnActionExecutingAsync(HttpActionContext actionContext, CancellationToken cancellationToken)
        {
            return Task.Run(() =>
            {
                start = DateTime.Now;
            }, cancellationToken);
        }

        public override Task OnActionExecutedAsync(HttpActionExecutedContext actionExecutedContext, CancellationToken cancellationToken)
        {
            return Task.Run(() =>
            {
                var end = DateTime.Now;
                actionExecutedContext.Response.Headers.Add("Start-Time", start.ToLongTimeString());
                actionExecutedContext.Response.Headers.Add("End-Time", end.ToLongTimeString());
            }, cancellationToken);
        }
    }
}