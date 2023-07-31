const createObjectOfCategories = () => {
  const categories = document.querySelector("#categories");
  const childrenOfCategories = categories.children;
  console.log("Number of categories:", childrenOfCategories.length);
  const arrayFromChildrenOfCategories = Array.from(childrenOfCategories);
  arrayFromChildrenOfCategories.forEach((child) => {
    const obj = {
      Category: child.firstElementChild.textContent,
      Elements: child.lastElementChild.children.length,
    };
    console.log("Category:", obj.Category);
    console.log("Elements:", obj.Elements);
    return;
  });
};
createObjectOfCategories();
