/*!
 * dependencies
 */
import * as React from 'react';
/*!
 * InitialData
 */

const painGaming = 'https://svirtus.cdnvideo.ru/8nqkvYPlIjsCXHE8JIp_j_AP0Ak=/0x0:250x250/57x57/filters:quality(95)/https://s3.eu-central-1.amazonaws.com/esports-core-media/f3/f3a304172ef31ee4a0c7caa87e23b80c.png?m=e18590809f94655b19adfd55de5b3f2d';
const evilGenius = 'https://svirtus.cdnvideo.ru/fpNEHV4rY6qr-JkADcA_nkyliqQ=/0x0:250x250/57x57/filters:quality(95)/https://s3.eu-central-1.amazonaws.com/esports-core-media/30/3038a84266e4ab86a75b668ce36bb37b.png?m=257a983152ba0cb9bfcbe775e158b236';

/*!
 * Expo
 */

export default class App extends React.Component {

  render() {
    return (
      <div style={{ margin: 10 }}>
        <div style={{ marginTop: 50, borderBottom: '2px solid black' }}>
          <h4 style={{ textAlign: 'left', color: '#ff6f22' }}>История матчей</h4>
        </div>
        <table className="teams" style={{ borderCollapse: 'collapse', width: '100%', tableLayout: 'fixed' }}>
          <tr style={{ borderBottom: '2px solid #ff6f22', lineHeight: 2 }}>
            <th style={{ textAlign: 'left' }}>Дата</th>
            <th style={{ textAlign: 'center' }}> Матч</th>
            <th style={{ textAlign: 'right' }}> Турнир</th>
          </tr>
          <tr style={{ borderBottom: '1px solid #d6d6d6', lineHeight: 1.5 }}>
            <td style={{ textAlign: 'left' }}>
              <p >17-06-2018</p>
            </td>
            <td style={{ textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ display: 'inline-flex', padding: '15px 0' }}>
                <span>paiN Gaming</span>
                <img src={painGaming} style={{ width: 25, height: 25, paddingLeft: 10 }} />
              </div>
              <div style={{ display: 'inline-flex' }}>
                <p>4:0</p>
              </div>
              <div style={{ display: 'inline-flex', padding: '15px 0' }}>
                <img src={evilGenius} style={{ width: 25, height: 25, paddingRight: 10 }} />
                <span>Evil Geniuses</span>
              </div>
            </td>
            <td style={{ textAlign: 'right' }}>
              <span>DOTA Summit 9</span> | <span>Групповой этап</span>
            </td>
          </tr>
          <tr style={{ borderBottom: '1px solid #d6d6d6', lineHeight: 1.5 }}>
            <td style={{ textAlign: 'left' }}>
              <p >17-06-2018</p>
            </td>
            <td style={{ textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ display: 'inline-flex', padding: '15px 0' }}>
                <span>paiN Gaming</span>
                <img src={painGaming} style={{ width: 25, height: 25, paddingLeft: 10 }} />
              </div>
              <div style={{ display: 'inline-flex' }}>
                <p>4:0</p>
              </div>
              <div style={{ display: 'inline-flex', padding: '15px 0' }}>
                <img src={evilGenius} style={{ width: 25, height: 25, paddingRight: 10 }} />
                <span>Evil Geniuses</span>
              </div>
            </td>
            <td style={{ textAlign: 'right' }}>
              <span>DOTA Summit 9</span> | <span>Групповой этап</span>
            </td>
          </tr>
          <tr style={{ borderBottom: '1px solid #d6d6d6', lineHeight: 1.5 }}>
            <td style={{ textAlign: 'left' }}>
              <p >17-06-2018</p>
            </td>
            <td style={{ textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ display: 'inline-flex', padding: '15px 0' }}>
                <span>paiN Gaming</span>
                <img src={painGaming} style={{ width: 25, height: 25, paddingLeft: 10 }} />
              </div>
              <div style={{ display: 'inline-flex' }}>
                <p>4:0</p>
              </div>
              <div style={{ display: 'inline-flex', padding: '15px 0' }}>
                <img src={evilGenius} style={{ width: 25, height: 25, paddingRight: 10 }} />
                <span>Evil Geniuses</span>
              </div>
            </td>
            <td style={{ textAlign: 'right' }}>
              <span>DOTA Summit 9</span> | <span>Групповой этап</span>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
