import { Link } from "react-router";

const BreadCrumb = ({items}) => {
    return (<section className="breadcrumb">
        <ul className="breadcrumb-list">
            <li id="list"><Link to="/">Home</Link></li>
            {items?.map(item => (
                <li><Link to={item.to} className={item.active && "active"}>{item.label}</Link></li>
            ))}
        </ul>
    </section>)
}
export default BreadCrumb;