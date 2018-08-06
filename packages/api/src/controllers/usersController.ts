/**
 * User controller
 *
 * @module       :: controller
 * @description  :: keep logic for handle user( login, logout and etc )
 *
 *
 * Module dependencies
 */

import { model } from 'mongoose';
import { send, json } from 'micro';
// import { hashSync, compareSync } from 'bcryptjs';
// import { generate } from 'generate-password';
// import { createTransport } from 'nodemailer';
// import { sign } from 'jsonwebtoken';

import { IRequest, IResponse, IRequestJson } from '../../interfaces';

/**
 * Schema
 */

import UserSchema from '../models/User';

const User = model('User', UserSchema);

// const sendPasswordToEmail = async ({ fio, email }, password) => {
//   try {
//     const transporter = createTransport({
//       service: 'Yandex',
//       auth: {},
//     });

//     const mailOptions = {
//       from: 'access@ucavtor.ru',
//       to: `${email}, access@ucavtor.ru`,
//       subject: `Доступ к сайту - ( ${email} ) - ucavtor.ru`,
//       html: `
//         <p>Доступы для входа на сайт:</p>

//         <p><strong>Имя пользователя:</strong> ${fio}
//         <p><strong>почта для входа на сайт:</strong> ${email}
//         <p><strong>Пароль:</strong>  ${password}

//         <p>Вход на сайт осуществляется через <a href="http://dashboard.ucavtor.ru/auth">Панель управления</a></p>
//       `,
//     };

//     return transporter.sendMail(mailOptions);
//   } catch (e) {
//     return send(res, 500, e);
//   }
// };

/*!
 * Expos
 */

const index = async (_: IRequest, res: IResponse) => {
  const users = await User.find();

  return send(res, 200, users);
};

const show = async (_: IRequest, res: IResponse) => {
  const users = await User.find();

  return send(res, 200, users);
};

const store = async (_: IRequest, res: IResponse) => {
  try {
    // const user = await json(req);
    // const hashPassword = generate({
    //   length: 10,
    //   numbers: true,
    // });

    // const password = hashSync(hashPassword, 8);

    // const userObj = await User.create({ ...user, password });

    // const emailStatus = await sendPasswordToEmail(userObj, hashPassword);

    return send(res, 204);
  } catch (e) {
    return send(res, 500, e);
  }
};

const update = async (req: IRequest, res: IResponse) => {
  try {
    const data = await json(req) as IRequestJson;
    const { _id } = data;

    const user = await User.findOneAndUpdate({ _id }, data, { new: true });
    return send(res, 200, user);
  } catch (e) {
    return send(res, 500, e);
  }
};

// const login = async (req: IRequest, res: IResponse) => {
//   try {
//     const { email, password } = await json(req);
//     const user = await User.findOne({ email }, { _id: 1, fio: 1, position: 1, email: 1, password: 1 });

//     if (compareSync(password, user.password)) {
//       const token = sign(user.toObject(), '123');
//       return send(res, 200, { token });
//     }

//     return send(res, 403);
//   } catch (e) {
//     return send(res, 500, e);
//   }
// };

const destroy = async (req: IRequest, res: IResponse) => {
  try {
    const { _id } = await json(req) as IRequestJson;

    await User.findByIdAndRemove(_id);

    return send(res, 200);
  } catch (e) {
    return send(res, 500, e);
  }
};

export default { index, show, store, update, destroy };
