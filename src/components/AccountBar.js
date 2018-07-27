import React from 'react';
import logo from '../logo.svg';

const AccountBar = (props) => {
    return (
    <aside className="account-bar">
        <img src={logo} className="avatar" alt="" />
        <p className="user-name">{props.user.name}</p>
        <p className="user-id">{props.user.id}</p>
        <div className="settings">
            <a className="user-tool-icon has-tooltip tooltip-bottom" href="#" aria-label="settings" title="user settings">
                <i className="fa fa-cog" aria-hidden="true"></i>
                <span className="tooltip">user settings</span>
            </a>
        </div>
    </aside>
    );
}

export default AccountBar;