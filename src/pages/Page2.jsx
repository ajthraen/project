import React from 'react';
import IframeResizer from 'iframe-resizer-react'

function Page2() {
  return (
    <>
        <div className="containerVid">
          <div>This is a page</div>
          <div className="videoContainer">
          <IframeResizer
            log
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            style={{ width: '720px', height:'460px', minWidth: '100%'}}
          />
            {/* <iframe width="720" height="480"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            </iframe> */}
          </div>
        </div>
    </>
  );
}


export default Page2;