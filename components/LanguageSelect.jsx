/* eslint-disable react/no-array-index-key */
import React from 'react';

const LanguageSelect = ({ children, flags, selected }) => (
  <>
    <label htmlFor="dialogControl" className="control">
      {children}
    </label>

    <input id="dialogControl" type="checkbox" className="toggle" />
    <div className="dialog">
      <div className="container">
        <div className="list">
          {flags.map((value, index) => (
            <a
              href={`?lang=${value}`}
              key={index}
              className={`flag ${value === selected ? 'flag-selected' : ''}`}
            >
              <span className={`flag-icon flag-icon-${value}`} />
            </a>
          ))}
        </div>
      </div>
    </div>

    <style jsx>{`
      .toggle {
        display: none;
      }
      .toggle:checked ~ .dialog {
        display: block;
      }
      .dialog {
        position: absolute;
        left: 0;
        width: 100%;
        display: none;
      }
      .container {
        display: flex;
        justify-content: center;
      }
      .list {
        position: absolute;
        top: 2em;
        width: 100%;
        max-width: 600px;
        display: grid;
        grid-template-columns: auto auto auto auto auto auto;
        background-color: hsl(0, 0%, 24%);
        border-width: 0px;
        border-radius: 10px;
      }
      .flag-selected {
        background-color: #e0e0e0;
      }
      .flag {
        padding: 10px;
        display: block;
        font-size: 20px;
        user-select: none;
        cursor: pointer;
        border-radius: 4px;
      }
      .flag:hover {
        background-color: #ff3200;
      }
    `}</style>
  </>
);

export { LanguageSelect };
