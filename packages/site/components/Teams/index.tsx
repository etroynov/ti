/*!
 * dependencies
 */
import * as React from 'react';
/*!
 * InitialData
 */

const teamAvatar = 'https://svirtus.cdnvideo.ru/NZXj8TRzxesLuL1ohBWzia0fqV0=/0x0:250x250/150x150/filters:quality(95)/https://s3.eu-central-1.amazonaws.com/esports-core-media/de/de44dce89fc40d2e9c38057e381d4757.png?m=43027a53a5644ccce50690704946d401';

/*!
 * Expo
 */
export default class App extends React.Component {

  render() {
    return (
      <div style={{ margin: 10 }}>
        <div style={{ marginTop: 50, borderBottom: '2px solid black' }}>
          <h4 style={{ textAlign: 'left', color: '#ff6f22' }}>Участие в командах</h4>
        </div>
        <table className="teams" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <tr style={{ borderBottom: '2px solid #ff6f22', lineHeight: 2 }}>
            <th style={{ textAlign: 'left', width: '100%' }}>Команда</th>
            <th style={{ display: 'flex' }}>
              <div style={{ flex: 1 }}>Победы</div>
              <div style={{ flex: 1 }}>Ничья</div>
              <div style={{ flex: 1 }}>Поражение</div>
            </th>
          </tr>
          <tr style={{ borderBottom: '1px solid #d6d6d6' }}>
            <td>
              <div style={{ paddingTop: 10 }}>
                <div style={{ display: 'inline-flex', padding: '15px 0' }}>
                  <img src={teamAvatar} style={{ width: 50, height: 50 }} />
                  <div style={{ marginTop: 'auto', lineHeight: 1.5, marginLeft: 10 }}>
                    <p style={{ margin: 0 }}>Игрок команды</p>
                    <span style={{ fontWeight: 'bold' }}>Random team</span>
                  </div>
                </div>
              </div>
            </td>
            <td style={{ textAlign: 'right' }}>
              <div style={{ marginRight: 20, width: 350, height: 7, lineHeight: 0.5, textAlign: 'left' }}>
                <span style={{ fontSize: '0.85em' }} >
                  Всего матчей: 20
                  </span>
              </div>
              <div style={{ marginRight: 20, width: 350, height: 7 }}>
                <div style={{ display: 'inline-block', width: '57%', backgroundColor: '#5cb85c', height: '100%', borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }} />
                <div style={{ display: 'inline-block', width: '10%', backgroundColor: '#777', height: '100%' }} />
                <div style={{ display: 'inline-block', width: '33%', backgroundColor: '#d9534f', height: '100%', borderBottomRightRadius: 10, borderTopRightRadius: 10 }} />
              </div>
              <div style={{ marginRight: 20, width: 350, height: 7, lineHeight: 1 }}>
                <p style={{ display: 'inline-block', width: '57%', color: '#5cb85c', textAlign: 'left', fontSize: '0.85em' }} >
                  57%
                  </p>
                <p style={{ display: 'inline-block', width: '10%', color: '#777', textAlign: 'center', fontSize: '0.85em' }} >
                  10%
                  </p>
                <p style={{ display: 'inline-block', width: '33%', color: '#d9534f', textAlign: 'right', fontSize: '0.85em' }}>
                  33%
                  </p>
              </div>
            </td>
          </tr>
          <tr style={{ borderBottom: '1px solid #d6d6d6' }}>
            <td>
              <div style={{ paddingTop: 10 }}>
                <div style={{ display: 'inline-flex', padding: '15px 0' }}>
                  <img src={teamAvatar} style={{ width: 50, height: 50 }} />
                  <div style={{ marginTop: 'auto', lineHeight: 1.5, marginLeft: 10 }}>
                    <p style={{ margin: 0 }}>Игрок команды</p>
                    <span style={{ fontWeight: 'bold' }}>Random team</span>
                  </div>
                </div>
              </div>
            </td>
            <td style={{ textAlign: 'right' }}>
              <div style={{ marginRight: 20, width: 350, height: 7, lineHeight: 0.5, textAlign: 'left' }}>
                <span style={{ fontSize: '0.85em' }} >
                  Всего матчей: 20
                  </span>
              </div>
              <div style={{ marginRight: 20, width: 350, height: 7 }}>
                <div style={{ display: 'inline-block', width: '57%', backgroundColor: '#5cb85c', height: '100%', borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }} />
                <div style={{ display: 'inline-block', width: '10%', backgroundColor: '#777', height: '100%' }} />
                <div style={{ display: 'inline-block', width: '33%', backgroundColor: '#d9534f', height: '100%', borderBottomRightRadius: 10, borderTopRightRadius: 10 }} />
              </div>
              <div style={{ marginRight: 20, width: 350, height: 7, lineHeight: 1 }}>
                <p style={{ display: 'inline-block', width: '57%', color: '#5cb85c', textAlign: 'left', fontSize: '0.85em' }} >
                  57%
                  </p>
                <p style={{ display: 'inline-block', width: '10%', color: '#777', textAlign: 'center', fontSize: '0.85em' }} >
                  10%
                  </p>
                <p style={{ display: 'inline-block', width: '33%', color: '#d9534f', textAlign: 'right', fontSize: '0.85em' }}>
                  33%
                  </p>
              </div>
            </td>
          </tr>
          <tr style={{ borderBottom: '1px solid #d6d6d6' }}>
            <td>
              <div style={{ paddingTop: 10 }}>
                <div style={{ display: 'inline-flex', padding: '15px 0' }}>
                  <img src={teamAvatar} style={{ width: 50, height: 50 }} />
                  <div style={{ marginTop: 'auto', lineHeight: 1.5, marginLeft: 10 }}>
                    <p style={{ margin: 0 }}>Игрок команды</p>
                    <span style={{ fontWeight: 'bold' }}>Random team</span>
                  </div>
                </div>
              </div>
            </td>
            <td style={{ textAlign: 'right' }}>
              <div style={{ marginRight: 20, width: 350, height: 7, lineHeight: 0.5, textAlign: 'left' }}>
                <span style={{ fontSize: '0.85em' }} >
                  Всего матчей: 20
                  </span>
              </div>
              <div style={{ marginRight: 20, width: 350, height: 7 }}>
                <div style={{ display: 'inline-block', width: '57%', backgroundColor: '#5cb85c', height: '100%', borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }} />
                <div style={{ display: 'inline-block', width: '10%', backgroundColor: '#777', height: '100%' }} />
                <div style={{ display: 'inline-block', width: '33%', backgroundColor: '#d9534f', height: '100%', borderBottomRightRadius: 10, borderTopRightRadius: 10 }} />
              </div>
              <div style={{ marginRight: 20, width: 350, height: 7, lineHeight: 1 }}>
                <p style={{ display: 'inline-block', width: '57%', color: '#5cb85c', textAlign: 'left', fontSize: '0.85em' }} >
                  57%
                  </p>
                <p style={{ display: 'inline-block', width: '10%', color: '#777', textAlign: 'center', fontSize: '0.85em' }} >
                  10%
                  </p>
                <p style={{ display: 'inline-block', width: '33%', color: '#d9534f', textAlign: 'right', fontSize: '0.85em' }}>
                  33%
                  </p>
              </div>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
