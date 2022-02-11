import css from './+.module.scss';

export default function Layout() {
  return (
    <div className={css.page}>
      <nav className={css.navbar}></nav>

      <main className={css.container}>
        <nav className={css.A}></nav>
        <div className={css.B}></div>
        <div className={css.C}></div>
        <div className={css.D}></div>
        <div className={css.E}></div>
      </main>
    </div>
  );
}
