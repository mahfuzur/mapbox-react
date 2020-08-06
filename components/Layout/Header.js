import React from 'react';
import Link from 'next/link'
import { withRouter } from 'next/router'
import Head from "./head";
const Header = (props) => {
  const style = {
    notActive: "ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",
    active : "ml-4  px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
  }
  const navItem = [
    {name: 'Dashboard', path: '/'},
    {name: 'Team', path: '/team'},
    {name: 'Profile', path: '/profile'}
  ]

  const pageTitle = () => {
    const activePath = navItem.find(item => item.path === props.router.pathname)
    return activePath && activePath.name + ' Page';
  }
  return <>
    <Head/>
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-on-dark.svg" alt="Workflow logo" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline">
                {
                  navItem.map((item, index) => {
                    return <Link href={item.path} key={index}>
                      <a className={item.path === props.router.pathname ? style.active : style.notActive}>
                        {item.name}
                      </a>
                    </Link>
                  })
                }

              </div>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            {/* Mobile menu button */}
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
              {/* Menu open: "hidden", Menu closed: "block" */}
              <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Menu open: "block", Menu closed: "hidden" */}
              <svg className="hidden h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">
          {pageTitle()}
        </h1>
      </div>
    </header>
  </>;
};

export default withRouter(Header);
