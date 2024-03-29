import React from 'react';

function Alert(props) {
  return (
    <div className='alertmsg'>
    {  props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>Success</strong> {props.alert.msg}
  
</div>}
  
    </div>
  );
}

export default Alert;
