"use client";
import Link from "next/link";
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import MyDatePicker from "./MyDatePicker";

export default function HeroSearch() {
  return (
    <>
      <div className="box-bottom-search background-card">
        <div className="item-search">
          <label className="text-sm-bold neutral-500">Basic Plan</label>
          <Dropdown className="dropdown">
            <Dropdown.Toggle
              as="div"
              className="btn btn-secondary dropdown-toggle btn-dropdown-search location-search"
              aria-expanded="false"
            >
              15 days
            </Dropdown.Toggle>
            <Dropdown.Menu as="ul" className="dropdown-menu">
              <li>
                <Link className="dropdown-item" href="#">
                  15 days
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  30 days
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  45 days
                </Link>
              </li>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="item-search item-search-2">
          <label className="text-sm-bold neutral-500">Advanced Plan</label>
          <Dropdown className="dropdown">
            <Dropdown.Toggle
              as="div"
              className="btn btn-secondary dropdown-toggle btn-dropdown-search location-search"
            >
              1 month
            </Dropdown.Toggle>
            <Dropdown.Menu as="ul" className="dropdown-menu">
              <li>
                <Link className="dropdown-item" href="#">
                  1 month
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  2 month
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  3 month
                </Link>
              </li>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="item-search item-search-2">
          <label className="text-sm-bold neutral-500">Premium Plan</label>
          <Dropdown className="dropdown">
            <Dropdown.Toggle
              as="div"
              className="btn btn-secondary dropdown-toggle btn-dropdown-search location-search"
            >
              1 month
            </Dropdown.Toggle>
            <Dropdown.Menu as="ul" className="dropdown-menu">
              <li>
                <Link className="dropdown-item" href="#">
                  1 month
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  2 month
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  3 month
                </Link>
              </li>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="item-search bd-none"></div>
        <div className="item-search bd-none d-flex justify-content-end">
          <button className="btn btn-brand-2 text-nowrap">
            <svg
              className="me-2"
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 19L14.6569 14.6569M14.6569 14.6569C16.1046 13.2091 17 11.2091 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17C11.2091 17 13.2091 16.1046 14.6569 14.6569Z"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Get Enrollment
          </button>
        </div>
      </div>
    </>
  );
}
