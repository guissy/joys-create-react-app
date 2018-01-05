import * as React from 'react';

export default class Notice extends React.PureComponent<NoticeProps, any> {
  constructor(props: NoticeProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <div>
        <p>16-05-30</p>
        <p>尊贵的客户，本公司已提供修复DNS的软件於所有会员下载，如您无法正常访问本公司网站，请到http://180.94.224.94/ 或新版会员端的“故障及疑难排解”下载此软件。</p>
      </div>
    );
  }
}

interface NoticeProps {
}
