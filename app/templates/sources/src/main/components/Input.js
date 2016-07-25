import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TitleActions from '../state/title';

import css from './Input.less';

/**
 * Input field
 *
 * @class Input
 * @
 */
const Input = ({
  /**
   * Title
   * @public
   * @property title
   * @type {string}
   */
  title,
  /**
   * Actions object
   * @private
   * @property actions
   */
  actions
}) => {
  return (
    <div class={css.component}>
      <label class={css({ label: true, green: true })}>Enter title</label>
      <input class={css.textbox} value={title} onChange={e => actions.changeTitle(e.target.value)} autoFocus />
    </div>
  )
}

export default connect(
  // map state to props
  state => ({ title: state.title }),
  // map dispatch to props
  dispatch => ({ actions: bindActionCreators(TitleActions, dispatch) })
)(Input);
