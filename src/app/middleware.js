// export { default } from "next-auth/middleware"

import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    // `withAuth` augments your `Request` with the user's token.
    function middleware(req) {

        // console.log(req.nextauth.token)
        // console.log(req.cookies)
        // const checkRole = (token, role) => token.user.role[role] === true;


        // const { pathname } = req.nextUrl;
        // let hasPermission = false;

        // switch (true) {
        //   case pathname.startsWith('/api/su'):
        //     hasPermission = checkRole(req.token, 'is_super_user');
        //     break;

        //   case pathname.startsWith('/api/a'):
        //     hasPermission = checkRole(req.token, 'is_admin');
        //     break;

        //   case pathname.startsWith('/api/s'):
        //     hasPermission = checkRole(req.token, 'is_staff');
        //     break;

        //     case pathname.startsWith('/api/u'):
        //       hasPermission = checkRole(req.token, 'is_student');
        //     break;

        //   default:
        //     return false
        //   }

        //   if (!hasPermission) {
        //     return NextResponse.json({ error: 'Unauthorized Access' }, { status: 403 });
        //   }else{
        //     return hasPermission
        //   }
    }
)
export const config = { matcher: ["/dashboard/:path*", "/api/:path*"] };

