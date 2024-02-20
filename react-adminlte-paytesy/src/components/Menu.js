import React from "react";

export default function Menu() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a href="index.html" className="brand-link">
        <img
          className="brand-link-logo"
          src="dist/img/logo1.jpg"
          width="43px"
          height="46px"
        />
        <span className="brand-text font-weight-light">
          <img src="dist/img/logo2.jpg" width="114px" height="46px" />
        </span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional)  
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="dist/img/user2-160x160.jpg"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              Claudio Silva
            </a>
          </div>
        </div>
         */}
        {/* SidebarSearch Form 
        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input
              className="form-control form-control-sidebar"
              type="search"
              placeholder="Pesquisa"
              aria-label="search"
            />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw" />
              </button>
            </div>
          </div>
        </div>
        */}
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class library */}

            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon ion-ios-keypad" />
                <p>
                  Paytesy
                  <i className="fas fa-angle-left right" />
                  <span className="badge badge-info right"></span>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="autori" className="nav-link">
                    <p>Criar autorização de compra</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/layout/top-nav-sidebar.html"
                    className="nav-link"
                  >
                    <p>Listar</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon ion-social-usd" />
                <p>
                  Referêrencia Multibanco
                  <i className="fas fa-angle-left right" />
                  <span className="badge badge-info right"></span>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="pages/layout/top-n" className="nav-link">
                    <p>Criar autorização de compra</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/layout/top-nav-sidebar.html"
                    className="nav-link"
                  >
                    <p>Listar</p>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
}
