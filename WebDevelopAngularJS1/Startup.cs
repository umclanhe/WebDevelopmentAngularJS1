﻿using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebDevelopAngularJS1.Startup))]
namespace WebDevelopAngularJS1
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
