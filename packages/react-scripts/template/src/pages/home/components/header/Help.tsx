import * as React from 'react';
import { connect } from 'dva';
import { Popover, Modal, Tabs } from 'antd';
import * as style from './Help.less';
import SportsRules from '../rules/SportRules';
import Rules from '../rules/Rules';
import Odds from '../rules/Odds';
import ContactUs from '../rules/ContactUs';

@(connect(({ indexHeader }: any) => ({ indexHeader })) as any)
export default class Help extends React.PureComponent<HelpProps, any> {
  constructor(props: HelpProps) {
    super(props);
    this.state = {};
  }

  onCancel = () => {
    this.props.dispatch({ type: 'indexHeader/save', payload: { visible: false, sport: '' } });
  };

  onChangeTab = v => {
    // todo 切换 tab
  };

  public render() {
    return (
      <Modal
        visible={this.props.indexHeader.visible}
        footer={null}
        onCancel={this.onCancel}
        title={'帮助'}
        width={650}
        wrapClassName="antModal"
        className={style.modal}
      >
        <Tabs
          defaultActiveKey={this.props.indexHeader.sport}
          tabPosition={'left'}
          onChange={this.onChangeTab}
          key={this.props.indexHeader.sport}
        >
          <Tabs.TabPane
            tab={
              <div>
                <span>体育规则</span>
              </div>
            }
            key="sport"
          >
            <SportsRules />
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={
              <div>
                <span>规则与条款</span>
              </div>
            }
            key="rule"
          >
            <Rules />
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={
              <div>
                <span>赛果</span>
              </div>
            }
            key="10"
          >
            123123
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={
              <div>
                <span>指南</span>
              </div>
            }
            key="11"
          >
            即將推出
          </Tabs.TabPane>
          {/* <Tabs.TabPane
            tab={
              <div>
                <span>新功能</span>
              </div>
            }
            key="12"
          >
            即將推出
          </Tabs.TabPane>*/}
          <Tabs.TabPane
            tab={
              <div>
                <span>赔率计算列表</span>
              </div>
            }
            key="odds"
          >
            <Odds />
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={
              <div>
                <span>联系我们</span>
              </div>
            }
            key="14"
          >
            <ContactUs />
          </Tabs.TabPane>
        </Tabs>
      </Modal>
    );
  }
}

interface HelpProps {
  dispatch?: any;
  indexHeader?: any;
}
