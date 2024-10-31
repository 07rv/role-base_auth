const Register = ({ setLogintab }) => {
  return (
    <div class="py-16">
      <div class="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div class="w-full p-8 lg:w-1/2">
          <h2 class="text-2xl font-semibold text-gray-700 text-center">
            Brand123456
          </h2>
          <p class="text-xl text-gray-600 text-center">Welcome back!</p>
          <a
            href="#"
            class="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
          >
            <h1 class="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
              Authentication
            </h1>
          </a>
          <div class="mt-4 flex items-center justify-between">
            <span class="border-b w-1/5 lg:w-1/4"></span>
            <a href="#" class="text-xs text-center text-gray-500 uppercase">
              login with email
            </a>
            <span class="border-b w-1/5 lg:w-1/4"></span>
          </div>
          <div class="mt-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="email"
            />
          </div>
          <div class="mt-4">
            <div class="flex justify-between">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <a href="#" class="text-xs text-gray-500">
                Forget Password?
              </a>
            </div>
            <input
              class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="password"
            />
          </div>
          <div class="mt-8">
            <button class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
              Login
            </button>
          </div>
          <div class="mt-4 flex items-center justify-between">
            <span class="border-b w-1/4 md:w-1/3"></span>
            <a href="#" class="text-xs text-gray-500 uppercase">
              or sign up
            </a>
            <span class="border-b w-1/4 md:w-1/3"></span>
          </div>
        </div>
        <div class="hidden lg:block lg:w-1/2 bg-cover bg-[url('https://plus.unsplash.com/premium_photo-1661962607720-d23f056f56e6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29zbW9zfGVufDB8fDB8fHww&auto=format&fit=crop&w=667&q=80')]"></div>
      </div>
    </div>
  );
};

export default Register;
