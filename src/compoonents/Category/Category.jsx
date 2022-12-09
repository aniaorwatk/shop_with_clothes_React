import "./Category.style.scss";

const Category = ({category}) => {
    const { title, imageUrl } = category
    return (
        <div className="categories__container">
            <div className="background" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="categories__container-body">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>)
}

export default Category
