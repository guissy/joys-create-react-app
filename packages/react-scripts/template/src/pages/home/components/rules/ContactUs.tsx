import * as React from 'react';

import * as style from './SportRules.less';
export default class ContactUs extends React.PureComponent<ContactUsProps, any> {
  constructor(props: ContactUsProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <div className={style.rules}>
        <p className={style.title}>24/7 在线客服</p>
        <p>我们的客户服务人员将通过电话或电子邮件为您提供24小时全天服务。</p>
        <table cellSpacing="0" cellPadding="0">
          <tbody>
            <tr>
              <td className={style.contactIMG}>
                <img src="../../../../static/rule/contact.png" />
              </td>
              <td>
                <ul>
                  <li className={style.contactTB}>电话号码:</li>
                  <li>+852 5808 9063</li>
                  <li>+852 5808 8664</li>
                  <li>+63 915 195 0193</li>
                  <li>+63 915 195 5533</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className={style.midHight} />
            </tr>
            <tr>
              <td className={style.contactIMG}>
                <img src="../../../../static/rule/contact02.png" />
              </td>
              <td>
                <ul>
                  <li className={style.contactTB}>电邮地址:</li>
                  <li>royal888crown@hotmail.com</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

interface ContactUsProps {}
