import "regenerator-runtime/runtime";
import CategoryService from './services/CategoryService';
import FirebaseConstants from './constants/FirebaseConstants';

$(document).ready(()=>{
        const categoryService = new CategoryService(
            FirebaseConstants.RealTimeDB,
            "Token"
        );
        try {
            const placeholder = $('#placeholder');
            categoryService.findAllCategories().then((data) =>{
                let list ='';

                for(const id in data){
                    const element  = data[id];
                    const {name} = element;
                    list += `
                    <tr>
                    <td>${id}</td>
                    <td id="nameCate">${name}</td>
                    <td>
                        <a class="btn btn-success" href="../editCategory.html?id=${id}"> Edit </a> |
                        <a class="btn btn-primary" href="../deleteCategory.html?id=${id}">Delete</i></a>
                    </td>
                    </tr>`
                }
                placeholder.append(list);
            });
        } catch (error) {
            console.log(error)
        };
});
