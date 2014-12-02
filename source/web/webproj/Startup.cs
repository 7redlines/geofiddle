using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Se7enRedLines.GeoFiddle.Web.Startup))]
namespace Se7enRedLines.GeoFiddle.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
