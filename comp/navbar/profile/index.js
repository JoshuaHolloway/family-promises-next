import css from './+.module.scss';

export default function Logo() {
  return (
    <div className={css.container}>
      <div className={css.pic}></div>
      <p>PROFILE</p>
    </div>
  );
}
