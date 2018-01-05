import * as React from 'react';
import { connect } from 'dva';
import { Popover, Modal, Tabs } from 'antd';
import * as style from './Help.less';
import SportsRules from '../rules/SportRules';

@(connect(({ indexHeader }: any) => ({ indexHeader })) as any)
export default class Help extends React.PureComponent<HelpProps, any> {
  constructor(props: HelpProps) {
    super(props);
    this.state = {};
  }

  onCancel = () => {
    this.props.dispatch({ type: 'indexHeader/save', payload: { visible: false } });
  };

  onChangeTab = () => {
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
        <Tabs defaultActiveKey="8" tabPosition={'left'} onChange={this.onChangeTab}>
          <Tabs.TabPane
            tab={
              <div>
                <span>体育规则</span>
              </div>
            }
            key="8"
          >
            <SportsRules />
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={
              <div>
                <span>规则与条款</span>
              </div>
            }
            key="9"
          >
            123123
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
            123123
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={
              <div>
                <span>新功能</span>
              </div>
            }
            key="12"
          >
            123123
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={
              <div>
                <span>赔率计算列表</span>
              </div>
            }
            key="13"
          >
            123123
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={
              <div>
                <span>联系我们</span>
              </div>
            }
            key="14"
          >
            123123
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
