/*
 * dependencies
 */
import * as React from 'react';

/*
 * Expo
 */
const teamAvatar = 'https://svirtus.cdnvideo.ru/NZXj8TRzxesLuL1ohBWzia0fqV0=/0x0:250x250/150x150/filters:quality(95)/https://s3.eu-central-1.amazonaws.com/esports-core-media/de/de44dce89fc40d2e9c38057e381d4757.png?m=43027a53a5644ccce50690704946d401';
const src = 'https://svirtus.cdnvideo.ru/O63GhqymKU71d-hCJKig-7ZCYRQ=/0x0:242x242/200x200/filters:quality(95)/https://s3.eu-central-1.amazonaws.com/esports-core-media/eb/eb2fcf502d9aba5f9802ff9a8515e0dc.png?m=0414db48f4b3c74b28f50bc44e3a9911';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <div style={{ float: 'left', padding: 15, width: 200, height: 320 }}>
          <img src={src} style={{ width: 200, height: 200, borderRadius: '50%' }} />
          <div style={{ textAlign: 'center', lineHeight: 1 }}>
            <p style={{ fontWeight: 'bold', marginBottom: 5 }}>
              Призовые:
            </p>
            <span>
              $ 1 105 750
            </span>
          </div>
        </div>
        <div style={{ float: 'right', padding: 15 }}>
          <div style={{ paddingTop: 10 }}>
            <div style={{ display: 'inline-flex', padding: '15px 0' }}>
              <img src={teamAvatar} style={{ width: 50, height: 50 }} />
              <div style={{ marginTop: 'auto', lineHeight: 1.5, marginLeft: 10 }}>
                <p style={{ margin: 0 }}>Игрок команды</p>
                <span style={{ fontWeight: 'bold' }}>Random team</span>
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: '#ebebeb', width: 280, height: 50, padding: 10 }} >
            <div style={{ display: 'flex' }}>
              <div style={{ flex: 1, textAlign: 'left', color: '#5cb85c', fontSize: '0.85em', lineHeight: 1.3 }}>Победы</div>
              <div style={{ flex: 1, textAlign: 'center', color: '#777', fontSize: '0.85em', lineHeight: 1.3 }}>Ничья</div>
              <div style={{ flex: 1, textAlign: 'right', color: '#d9534f', fontSize: '0.85em', lineHeight: 1.3 }}>Поражение</div>
            </div>
            <div style={{ marginRight: 20, width: 280, height: 7 }}>
              <div style={{ display: 'inline-block', width: '57%', backgroundColor: '#5cb85c', height: '100%', borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }} />
              <div style={{ display: 'inline-block', width: '10%', backgroundColor: '#777', height: '100%' }} />
              <div style={{ display: 'inline-block', width: '33%', backgroundColor: '#d9534f', height: '100%', borderBottomRightRadius: 10, borderTopRightRadius: 10 }} />
            </div>
            <div style={{ marginRight: 20, width: 280, height: 7, lineHeight: 1 }}>
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
          </div>
        </div>
        <div style={{ lineHeight: 1.5 }}>
          <div style={{ height: 50 }} />
          <p>
            Также известен как: w33haa
            Аливи Омар, 06.05.1995 (23 года)  Румыния
          </p>
          <p>
            Профессиональный игрок в Dota 2. У w33 сирийские корни (его отец из Сирии, а мать из Румынии).
            Он стал известен благодаря тому, что долгое время удерживал первое место в ладдере MMR.
            Начал свою профессиональную карьеру весной 2014 года в команде Balkan Bears.
            Состав часто менялся, но ребятам, даже с хорошим показателем MMR, просто не хватало опыта игры на высоком командном уровне.
            В мае 2015 года w33 окончательно покидает команду.
          </p>
          <p>
            Немного поиграв в европейском миксе 4 Clover & Lepricon w33 получает неожиданное приглашение от Puppey - стать новым мидером Team Secret.
            Это была первая команда такого уровня для Омара и факт перехода вызвал немало скепсиса в комьюнити.
            Тем не менее, он смог раскрыть свой потенциал, завоевав с командой первые места на MLG World Finals и Nanyang Dota 2 Championships,
             а также заняв второе место на The Frankfurt Major 2015.
            На The Shanghai Major 2016 его и вовсе ждал триумф - первое место. Однако,
             сразу после турнира w33 был уволен из команды и за оставшиеся дни окна решафлов нашел себе пристанище в Digital Chaos.
					</p>
        </div>
      </div>
    );
  }
}
