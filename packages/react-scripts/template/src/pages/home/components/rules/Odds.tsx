import * as React from 'react';

import * as style from './SportRules.less';
export default class Odds extends React.PureComponent<OddsProps, any> {
  constructor(props: OddsProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <div className={style.odd}>
        <table cellspacing="0" cellpadding="0" className={style.oddsTB}>
          <tbody>
            <tr>
              <th width="28%">投注金额</th>
              <th width="24%">赔率</th>
              <th width="24%">赢</th>
              <th width="24%">输</th>
            </tr>

            <tr className={style.oddsTitle}>
              <td colspan="4" className={style.paddleft}>
                香港盘
              </td>
            </tr>
            <tr>
              <td>1000</td>
              <td>0.800</td>
              <td>800</td>
              <td>-1000</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>1.130</td>
              <td>1130</td>
              <td>-1000</td>
            </tr>
            <tr className={style.oddsTitle}>
              <td colspan="4" className={style.paddleft}>
                马来盘
              </td>
            </tr>
            <tr>
              <td>1000</td>
              <td>0.800</td>
              <td>800</td>
              <td>-1000</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td className={style.RedWord}>-0.880</td>
              <td>1000</td>
              <td className={style.RedWord}>-880</td>
            </tr>
            <tr className={style.oddsTitle}>
              <td colspan="4" className={style.paddleft}>
                印尼盘
              </td>
            </tr>
            <tr>
              <td>1000</td>
              <td>1.130</td>
              <td>1130</td>
              <td>-1000</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td className={style.RedWord}>-1.250</td>
              <td>1000</td>
              <td className={style.RedWord}>-1250</td>
            </tr>
            <tr className={style.oddsTitle}>
              <td colspan="4" className={style.paddleft}>
                欧洲盘
              </td>
            </tr>
            <tr>
              <td>1000</td>
              <td>1.800</td>
              <td>800</td>
              <td>-1000</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>2.130</td>
              <td>1130</td>
              <td>-1000</td>
            </tr>
          </tbody>
        </table>

        <table cellspacing="0" cellpadding="0" className={style.oddsTB}>
          <tbody>
            <tr>
              <th colspan="3" width="48%">
                赔率转换表
              </th>
            </tr>
            <tr>
              <td width="33.33%" className={style.leftLine}>
                香港盘
              </td>
              <td width="33.33%">马来盘</td>
              <td width="33.33%" className={style.rightline}>
                印尼盘
              </td>
            </tr>
            <tr>
              <td className={style.leftLine}>0.10</td>
              <td>0.10</td>
              <td className={style.RedWord}>-10.00</td>
            </tr>
            <tr>
              <td className={style.leftLine}>0.20</td>
              <td>0.20</td>
              <td className={style.RedWord}>-5.00</td>
            </tr>
            <tr>
              <td className={style.leftLine}>0.35</td>
              <td>0.35</td>
              <td className={style.RedWord}>-2.85</td>
            </tr>
            <tr>
              <td className={style.leftLine}>0.40</td>
              <td>0.40</td>
              <td className={style.RedWord}>-2.50</td>
            </tr>
            <tr>
              <td className={style.leftLine}>0.50</td>
              <td>0.50</td>
              <td className={style.RedWord}>-2.00</td>
            </tr>
            <tr>
              <td className={style.leftLine}>0.65</td>
              <td>0.65</td>
              <td className={style.RedWord}>-1.53</td>
            </tr>
            <tr>
              <td className={style.leftLine}>0.75</td>
              <td>0.75</td>
              <td className={style.RedWord}>-1.33</td>
            </tr>
            <tr>
              <td className={style.leftLine}>0.83</td>
              <td>0.83</td>
              <td className={style.RedWord}>-1.20</td>
            </tr>
            <tr>
              <td className={style.leftLine}>0.96</td>
              <td>0.96</td>
              <td className={style.RedWord}>-1.04</td>
            </tr>
            <tr>
              <td className={style.leftLine}>1.00</td>
              <td className={style.RedWord}>-1.00</td>
              <td className={style.RedWord}>-1.00</td>
            </tr>
            <tr>
              <td className={style.leftLine}>1.15</td>
              <td className={style.RedWord}>-0.86</td>
              <td className={style.rightline}>1.15</td>
            </tr>
            <tr>
              <td className={style.leftLine}>1.35</td>
              <td className={style.RedWord}>-0.74</td>
              <td className={style.rightline}>1.35</td>
            </tr>
            <tr>
              <td className={style.leftLine}>1.45</td>
              <td className={style.RedWord}>-0.68</td>
              <td className={style.rightline}>1.45</td>
            </tr>
            <tr>
              <td className={style.leftLine}>1.55</td>
              <td className={style.RedWord}>-0.64</td>
              <td className={style.rightline}>1.55</td>
            </tr>
            <tr>
              <td className={style.leftLine}>1.65</td>
              <td className={style.RedWord}>-0.60</td>
              <td className={style.rightline}>1.65</td>
            </tr>
            <tr>
              <td className={style.leftLine}>1.74</td>
              <td className={style.RedWord}>-0.57</td>
              <td className={style.rightline}>1.74</td>
            </tr>
            <tr>
              <td className={style.leftLine}>1.97</td>
              <td className={style.RedWord}>-0.50</td>
              <td className={style.rightline}>1.97</td>
            </tr>
            <tr>
              <td className={style.leftLine}>2.05</td>
              <td className={style.RedWord}>-0.48</td>
              <td className={style.rightline}>2.05</td>
            </tr>
            <tr>
              <td className={style.leftLine}>3.45</td>
              <td className={style.RedWord}>-0.28</td>
              <td className={style.rightline}>3.45</td>
            </tr>
            <tr>
              <td className={style.leftLine}>4.25</td>
              <td className={style.RedWord}>-0.23</td>
              <td className={style.rightline}>4.25</td>
            </tr>
            <tr>
              <td className={style.leftLine}>5.00</td>
              <td className={style.RedWord}>-0.20</td>
              <td className={style.rightline}>5.00</td>
            </tr>
            <tr>
              <td className={style.leftLine}>8.00</td>
              <td className={style.RedWord}>-0.12</td>
              <td className={style.rightline}>8.00</td>
            </tr>
            <tr>
              <td className={style.leftLine}>10.00</td>
              <td className={style.RedWord}>-0.10</td>
              <td className={style.rightline}>10.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

interface OddsProps {}
