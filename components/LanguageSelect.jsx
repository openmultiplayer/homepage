/* eslint-disable react/no-array-index-key */
import React from 'react';
import Link from 'next/link';
import 'flag-icon-css/css/flag-icon.css';

const LanguageSelect = ({ flags, selected }) => (
  <div className="container">
    <div className="list">
      {flags.map((value, index) => {
        let className = 'flag';
        if (value === selected) {
          className += ' flag-selected';
        }
        return (
          <Link key={value} href={`?lang=${value}`}>
            <a key={index} className={className} role="link">
              <span className={`flag-icon flag-icon-${value}`} />
            </a>
          </Link>
        );
      })}
    </div>

    <style jsx>{`
      .container {
        display: flex;
        justify-content: right;
      }
      .list {
        position: absolute;
        display: grid;
        text-align: center;
        padding: 20px;
        grid-template-columns: 25% 25% 25% 25%;
        border-radius: 10px;
        margin: 1em;
        padding: 1em;
      }
      .list:hover {
        background-color: #2d2d2d;
        border-color: hsla(0deg, 100%, 100%, 50%);
        border-style: solid;
        border-width: 1px;
      }
      .list:hover .flag,
      .list .flag-selected {
        display: block;
      }
      .list:hover .flag-selected {
        background-color: #e0e0e0;
      }
      .flag {
        padding: 10px;
        display: none;
        font-size: 35px;
        user-select: none;
        cursor: pointer;
        border-radius: 10px;
      }
      .flag span {
        position: relative;
      }
      .flag:hover {
        background-color: #ff3200;
      }
    `}</style>
  </div>
);

export { LanguageSelect };
