import React, { PureComponent } from 'react';
import { FilterType } from '../constants/filtertype';
import classnames from 'classnames';

const FILTER_TITLES = {
  [FilterType.SHOW_ALL]: 'All',
  [FilterType.SHOW_ACTIVE]: 'Active',
  [FilterType.SHOW_COMPLETED]: 'Completed',
};

interface FooterProps {
  activeCount: number;
  completedCount: number;
  filter: string;
  onClearCompleted: () => void;
  onShow: (title: string) => void;
}

class Footer extends PureComponent<FooterProps, {}> {
  renderTodoCount() {
    const { activeCount } = this.props;
    const itemWord = activeCount === 1 ? 'item' : 'items';

    return (
      <span className="todo-count">
        <strong>{activeCount || 'No'}</strong> {itemWord} left
      </span>
    );
  }

  renderFilterLink(filter: string) {
    const title = FILTER_TITLES[filter];
    const { filter: selectedFilter, onShow } = this.props;

    return (
      <a
        className={classnames({ selected: filter === selectedFilter })}
        style={{ cursor: 'pointer' }}
        onClick={() => onShow(filter)}
      >
        {title}
      </a>
    );
  }

  renderClearButton() {
    const { completedCount, onClearCompleted } = this.props;
    if (completedCount > 0) {
      return (
        <button className="clear-completed" onClick={onClearCompleted}>
          Clear completed
        </button>
      );
    }
    return null;
  }
  render() {
    return (
      <footer className="footer">
        {this.renderTodoCount()}
        <ul className="filters">
          {Object.keys(FILTER_TITLES).map(title => (
            <li key={title}>{this.renderFilterLink(title)}</li>
          ))}
        </ul>
        {this.renderClearButton()}
      </footer>
    );
  }
}

export { Footer, FooterProps };
