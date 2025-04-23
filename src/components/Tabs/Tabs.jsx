import classNames from 'classnames/bind';

export const Tabs = ({ tabs, activeTabId, setActiveTabId }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                className={classNames({ 'is-active': activeTabId === tab.id })}
                data-cy="Tab"
                onClick={}
              >
                <a href={`#${tab.id}`} data-cy="TabLink">
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        Some text 1
      </div>
    </div>
  );
};
