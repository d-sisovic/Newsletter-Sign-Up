import styles from './List.module.scss';
import iconListImg from '../../assets/images/icon-list.svg';

const List = ({ list }: { list: string[] }) => <ul className={styles.container}>
    {list.map(text => <li key={text}>
        <img src={iconListImg} alt="check" />

        <p>{text}</p>
    </li>)}
</ul>;

export default List;
