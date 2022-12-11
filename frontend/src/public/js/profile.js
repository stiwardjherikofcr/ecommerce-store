(function () {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
        card = '';
        card += /*html*/ `
                <div class="form-group text-center mb-3">
                    <img class="profile" src="http://localhost:3000/img/users/${user.image}" height="100" alt="${user.fullName}">
                </div>
                <div class="row mb-3">
                    <div class="col-sm-12 col-md-12 col-lg-6">
                        <div class="form-group">
                            <label for="fullname">Nonbre Completo</label>
                            <input class="form-control" type="text" id="fullName" value="${user.fullName}" disabled>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-6">
                        <div class="form-group">
                            <label for="email">Correo Electrónico</label>
                            <input class="form-control" type="text" id="email" value="${user.email}" disabled>
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-sm-12 col-md-12 col-lg-6">
                        <label for="phone">Teléfono</label>
                        <input class="form-control" type="text" id="phone" value="${user.phone}" disabled>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-6">
                        <label for="address">Dirección</label>
                        <input class="form-control" type="text" id="address" value="${user.address}" disabled>
                    </div>
                </div>
        `;
        document.getElementById("card_profile").innerHTML = card;
    }
})();