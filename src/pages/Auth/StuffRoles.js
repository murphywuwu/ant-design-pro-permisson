import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, Form, Checkbox, Button } from 'antd';

/* eslint react/no-multi-comp:0 */
@connect(({ role }) => ({
  role
}))
@Form.create()
class StuffRoles extends PureComponent {

  componentDidMount() {
    const { dispatch } = this.props;
    const jsonId = this.props.location.params;
    dispatch({
      type: 'role/fetchViaStuff',
      payload: jsonId,
    });
  }

  render() {
    const {
      role: { role },
    } = this.props;

    let currentRoles = [];

    const roles = [
      {label:"projector", value:"projector"},
      {label:"coder", value:"coder"},
      {label:"designer", value:"designer"},
    ];

    const CheckboxGroup = Checkbox.Group;

    function onChange(checkedValues) {
      console.log('checked = ', checkedValues);
      currentRoles = checkedValues;
    }

    function handleSubmit() {
      console.log(currentRoles)
    }

    return (
      <div>
        <Card title="员工角色管理" bordered={false}>
          <CheckboxGroup options={roles} defaultValue={role} onChange={onChange} />
          <br /><br />
          <Button type="primary" onClick={handleSubmit}>提交</Button>
        </Card>
      </div>
    );
  }
}

export default StuffRoles;
