using System.Web;
using System.Web.Optimization;

namespace WebDevelopAngularJS1
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/site.css"));

            BundleTable.EnableOptimizations = true;

            bundles.Add(new ScriptBundle("~/bundles/WebDevelopAngularJS1")
                .IncludeDirectory("~/Scripts/Controllers", "*.js")
                .IncludeDirectory("~/Scripts/Factories", "*.js")
                .Include("~/Scripts/WebDevelopAngularJS1.js"));
        }
    }
}
