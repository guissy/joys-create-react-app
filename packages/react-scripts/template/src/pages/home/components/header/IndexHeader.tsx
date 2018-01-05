import * as React from 'react';
import { connect } from 'dva';
import { Icon, Popover, Badge } from 'antd';
import * as style from './IndexHeader.less';
import MeiDongTime from './MeidongTime';
import Notice from './Notice';
import Help from './Help';

@(connect(({ indexHeader }: any) => ({ indexHeader })) as any)
export default class IndexHeader extends React.PureComponent<IndexHeaderProps, any> {
  constructor(props: IndexHeaderProps) {
    super(props);
    this.state = {
      msg: 5,
      visb: false
    };
  }

  onHelp = () => {
    this.props.dispatch({ type: 'indexHeader/modal', payload: {} });
    this.setState({ visb: false });
  };
  onClickhelp = () => {
    this.setState({ visb: true });
  };

  public render() {
    return (
      <div className={style.header}>
        <div className={style.left}>
          <div className={style.headAcc}>
            <span />
          </div>
          <div>
            <p style={{ color: '#a87a6a' }}>aaaa</p>
            <p>
              人民币 100 <Icon type="reload" />
            </p>
          </div>
        </div>
        <div>
          <span className={style.span}>
            <MeiDongTime />
          </span>
          <span className={style.span}>首页</span>
          <span className={style.span}>会员中心</span>
          <Popover
            placement="bottomRight"
            title="帮助"
            visible={this.state.visb}
            overlayClassName={'antPopover'}
            content={
              <div className={style.helpList}>
                <p className={style.help} onClick={this.onHelp}>
                  体育规则
                </p>
                <Help />
                <p className={style.help}>规则与条款</p>
                <p className={style.help}>赔率计算列表</p>
              </div>
            }
            trigger="click"
          >
            <span className={style.span} onClick={this.onClickhelp}>
              帮助说明
            </span>
          </Popover>
          <Popover
            placement="bottomRight"
            title="新公告"
            overlayClassName={'antPopover'}
            content={<Notice />}
            trigger="click"
          >
            <Badge count={this.state.msg}>
              <span className={style.span}>公告</span>
            </Badge>
          </Popover>
          <span className={style.span}>简体</span>
        </div>
      </div>
    );
  }
}

interface IndexHeaderProps {
  login?: any;
  dispatch?: any;
}
