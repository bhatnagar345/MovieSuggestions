import React from 'react';

import Popup from 'reactjs-popup';

const PopupExample = () => (
    <Popup trigger={<li className="heading mini"><i class="fas fa-bell" style = {{color : "#fe8732"}}></i></li>} position='bottom center'>
      {close => (
        <div>


         <p>you have no notifications</p>
         {/* <a onClick={close}><i class="fas fa-window-close"></i></a> */}
        </div>
        
         
      )}
    </Popup>
  );

  export default PopupExample;