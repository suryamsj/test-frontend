<script>
    import { register } from "../api/user";
    import { onMount } from "svelte";

    let user = {
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        picture_profile: "",
        telephone: "",
        address: "",
        city: "",
        province: "",
        country: "",
    };

    $: submit = async () => {
        await register(user);
        onMount(() => {
            window.location.href = "/";
        });
    };
</script>

<section class="py-5">
    <div class="container">
        <div class="row justify-content-center">
            <h4 class="text-center mb-4">Register</h4>
            <div class="col-lg-6">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item w-50" role="presentation">
                        <button
                            class="nav-link active w-100"
                            id="pills-home-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-akun"
                            type="button"
                            role="tab"
                            aria-controls="pills-akun"
                            aria-selected="true">Akun</button
                        >
                    </li>
                    <li class="nav-item w-50" role="presentation">
                        <button
                            class="nav-link w-100"
                            id="pills-profile-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-detail"
                            type="button"
                            role="tab"
                            aria-controls="pills-detail"
                            aria-selected="false">Akun Detail</button
                        >
                    </li>
                </ul>
                <form
                    on:submit|preventDefault={submit}
                    enctype="multipart/form-data"
                >
                    <div class="tab-content" id="pills-tabContent">
                        <div
                            class="tab-pane fade show active"
                            id="pills-akun"
                            role="tabpanel"
                            aria-labelledby="pills-akun-tab"
                            tabindex="0"
                        >
                            <div class="mb-3">
                                <label
                                    for="username"
                                    id="username"
                                    class="form-label">Username</label
                                >
                                <input
                                    bind:value={user.username}
                                    type="mail"
                                    class="form-control"
                                    id="username"
                                    placeholder="Username"
                                    required
                                />
                            </div>
                            <div class="mb-3">
                                <label
                                    for="password"
                                    id="password"
                                    class="form-label">Password</label
                                >
                                <input
                                    bind:value={user.password}
                                    type="password"
                                    class="form-control"
                                    id="password"
                                    placeholder="Password"
                                    required
                                />
                            </div>
                        </div>
                        <div
                            class="tab-pane fade"
                            id="pills-detail"
                            role="tabpanel"
                            aria-labelledby="pills-detail-tab"
                            tabindex="0"
                        >
                            <div class="mb-3">
                                <label
                                    for="first_name"
                                    id="first_name"
                                    class="form-label">First Name</label
                                >
                                <input
                                    bind:value={user.first_name}
                                    type="text"
                                    class="form-control"
                                    id="first_name"
                                    placeholder="First Name"
                                    required
                                />
                            </div>
                            <div class="mb-3">
                                <label
                                    for="last_name"
                                    id="last_name"
                                    class="form-label">Last Name</label
                                >
                                <input
                                    bind:value={user.last_name}
                                    type="text"
                                    class="form-control"
                                    id="last_name"
                                    placeholder="Last Name"
                                    required
                                />
                            </div>
                            <div class="mb-3">
                                <label for="formFile" class="form-label"
                                    >Profile Picture</label
                                >
                                <input
                                    bind:value={user.picture_profile}
                                    class="form-control"
                                    type="file"
                                    id="formFile"
                                />
                            </div>
                            <div class="mb-3">
                                <label
                                    for="telephone"
                                    id="telephone"
                                    class="form-label">Telephone</label
                                >
                                <input
                                    bind:value={user.telephone}
                                    type="text"
                                    class="form-control"
                                    id="telephone"
                                    placeholder="Telephone"
                                    required
                                />
                            </div>
                            <div class="mb-3">
                                <label
                                    for="address"
                                    id="address"
                                    class="form-label">Address</label
                                >
                                <input
                                    bind:value={user.address}
                                    type="text"
                                    class="form-control"
                                    id="address"
                                    placeholder="Address"
                                    required
                                />
                            </div>
                            <div class="mb-3">
                                <label for="city" id="city" class="form-label"
                                    >City</label
                                >
                                <input
                                    bind:value={user.city}
                                    type="text"
                                    class="form-control"
                                    id="city"
                                    placeholder="City"
                                    required
                                />
                            </div>
                            <div class="mb-3">
                                <label
                                    for="province"
                                    id="province"
                                    class="form-label"
                                    >Province
                                </label>
                                <input
                                    bind:value={user.province}
                                    type="text"
                                    class="form-control"
                                    id="province"
                                    placeholder="Province"
                                    required
                                />
                            </div>
                            <div class="mb-3">
                                <label
                                    for="country"
                                    id="country"
                                    class="form-label">Country</label
                                >
                                <input
                                    bind:value={user.country}
                                    type="text"
                                    class="form-control"
                                    id="country"
                                    placeholder="Country"
                                    required
                                />
                            </div>
                            <div class="mb">
                                <button type="submit" class="btn btn-primary"
                                    >Submit</button
                                >
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
