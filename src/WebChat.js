import React, { useEffect, useMemo } from 'react';
import ReactWebChat, { createDirectLine, createStyleSet } from 'botframework-webchat';

import './WebChat.css';

const WebChat = ({ className, onFetchToken, store, token }) => {
  const directLine = useMemo(() => createDirectLine({ token }), [token]);

  const styleSet = useMemo(
    () =>
      createStyleSet({
        backgroundColor: 'White',
        bubbleBorderRadius: 6,
        hideUploadButton: true,
        bubbleBackground: 'rgba(242, 241, 239, 0.2)',
        bubbleFromUserBackground: 'rgba(242, 241, 239, 0.2)',
        suggestedActionBorderColor: 'rgba(108, 122, 137, 1)',
        suggestedActionLayout: 'flow'
      }),
    []
  );

  useEffect(() => {
    onFetchToken();
  }, [onFetchToken]);

  return token ? (
    <ReactWebChat className={`${className || ''} web-chat`} directLine={directLine} store={store} styleSet={styleSet} />
  ) : (
    <div className={`${className || ''} connect-spinner`}>
      <div className="content">
        <div className="icon">
          <span className="ms-Icon ms-Icon--Robot" />
        </div>
        <p>Mi sto connettendo al servizio...</p>
      </div>
    </div>
  );
};

export default WebChat;
