using System.Web;
using System.Web.Optimization;

namespace Se7enRedLines.GeoFiddle.Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/js/init").Include(
                "~/bower_components/jquery/dist/jquery.js",
                "~/bower_components/bootstrap/dist/js/bootstrap.js",
                "~/Scripts/respond.js",
                "~/bower_components/angularjs/angular.js"));

            bundles.Add(new ScriptBundle("~/bundles/js/app").Include(
                "~/Scripts/app/app.js",
                "~/Scripts/app/pages/index.js"));

            bundles.Add(new StyleBundle("~/bundles/css/init").Include(
                "~/bower_components/bootstrap/dist/css/bootstrap.css"));

            bundles.Add(new StyleBundle("~/bundles/css/app").Include(
                "~/Content/bootstrap.css",
                "~/Content/fiddle.css"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/js/modernizr").Include(
                "~/Scripts/modernizr-*"));

            // Set EnableOptimizations to false for debugging. For more information,
            // visit http://go.microsoft.com/fwlink/?LinkId=301862
#if !DEBUG
            BundleTable.EnableOptimizations = true;
#endif
        }
    }
}
