import styles from "./Heading.module.css"

export function Heading(props) {
  return <h1 className={styles.cyan}>{props.children}</h1> // children é referente ao conteúdo que vem no meio da tag tsx usada no meu app
}