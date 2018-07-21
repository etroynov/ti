/*
 * dependencies
 */
import * as React from 'react';
/*
 * Components
 */

/*
 * Styled Components
 */
import {
	About,
	Colum1,
	Colum2,
	Colum3,
} from '../styledComponents/styledPlayerCard'
/*
 * Manually data
 */
/*
 * Expo
 */

export default class App extends React.Component {

	render() {
		return (
			<div style={{ margin: 10 }}>
				<div style={{ float: 'left', margin: 10 }}>
					<div style={{ border: '1px solid black', width: 150, height: 150 }}>
					</div>
				</div>
				<div style={{ float: "right", margin: 10, }}>
					<div style={{ border: '1px solid black', width: 250, height: 50 }}>
					</div>
				</div>
				<div>
					<p>
							Профессиональный игрок в Dota 2. У w33 сирийские корни (его отец из Сирии, а мать из Румынии). Он стал известен благодаря тому, что долгое время удерживал первое место в ладдере MMR. Начал свою профессиональную карьеру весной 2014 года в команде Balkan Bears.
							Состав часто менялся, но ребятам, даже с хорошим показателем MMR, просто не хватало опыта игры на высоком командном уровне. В мае 2015 года w33 окончательно покидает команду.
							Немного поиграв в европейском миксе 4 Clover & Lepricon w33 получает неожиданное приглашение от Puppey - стать новым мидером Team Secret. Это была первая команда такого уровня для Омара и факт перехода вызвал немало скепсиса в комьюнити.
							Тем не менее, он смог раскрыть свой потенциал, завоевав с командой первые места на MLG World Finals и Nanyang Dota 2 Championships, а также заняв второе место на The Frankfurt Major 2015.
							На The Shanghai Major 2016 его и вовсе ждал триумф - первое место. Однако, сразу после турнира w33 был уволен из команды и за оставшиеся дни окна решафлов нашел себе пристанище в Digital Chaos.
					</p>
				</div>
				<div style={{ marginTop: 50, borderBottom: '1px solid black'}}>
					<p style={{ textAlign: 'left'}}>Участие в командах</p>
				</div>
				<div style={{ marginTop: 25, borderBottom: '1px solid black'}}>
					<p style={{ textAlign: 'left'}}>Команда</p>
				</div>
				<div>
					<div style={{ lineHeight: 2, borderBottom: '1px solid black'}}>
						<div style={{ margin: 10,  display: 'inline-flex', width: '100%' ,justifyContent: 'space-between' }}>
							<div style={{ flexGrow: 1 }}>Лево</div>
							<div style={{ marginRight: 20 }}>Право</div>
						</div>
					</div>
					<div style={{ lineHeight: 2, borderBottom: '1px solid black'}}>
						<div style={{ margin: 10,  display: 'inline-flex', width: '100%' ,justifyContent: 'space-between' }}>
							<div style={{ flexGrow: 1 }}>Лево</div>
							<div style={{ marginRight: 20 }}>Право</div>
						</div>
					</div>
					<div style={{ lineHeight: 2, borderBottom: '1px solid black'}}>
						<div style={{ margin: 10,  display: 'inline-flex', width: '100%' ,justifyContent: 'space-between' }}>
							<div style={{ flexGrow: 1 }}>Лево</div>
							<div style={{ marginRight: 20 }}>Право</div>
						</div>
					</div>
				</div>
				<div style={{ marginTop: 50, borderBottom: '1px solid black'}}>
					<p style={{ textAlign: 'left'}}>Историй матчей</p>
				</div>
				<div style={{ marginTop: 25, borderBottom: '1px solid black'}}>
					<p style={{ textAlign: 'left'}}>Дата</p>
				</div>
				<div>
					<div style={{ lineHeight: 2, borderBottom: '1px solid black'}}>
						<div style={{ margin: 10,  display: 'inline-flex', width: '100%' ,justifyContent: 'space-between' }}>
							<div style={{ flexGrow: 1 }}>Лево</div>
							<div style={{ marginRight: 20 }}>Право</div>
						</div>
					</div>
					<div style={{ lineHeight: 2, borderBottom: '1px solid black'}}>
						<div style={{ margin: 10,  display: 'inline-flex', width: '100%' ,justifyContent: 'space-between' }}>
							<div style={{ flexGrow: 1 }}>Лево</div>
							<div style={{ marginRight: 20 }}>Право</div>
						</div>
					</div>
					<div style={{ lineHeight: 2, borderBottom: '1px solid black'}}>
						<div style={{ margin: 10,  display: 'inline-flex', width: '100%' ,justifyContent: 'space-between' }}>
							<div style={{ flexGrow: 1 }}>Лево</div>
							<div style={{ marginRight: 20 }}>Право</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

