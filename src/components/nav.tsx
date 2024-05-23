import { NextPage } from 'next'

import { Slash } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

interface Props {pathName: string}

const Nav: NextPage<Props> = ({pathName}) => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList className='text-[16px]'>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <span>/</span>
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage className="font-[700] capitalize">
              {pathName}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

export default Nav

// interface Props{}

// const Nav<Props> = ({ pathName }) => {
//   return (
//     <div>
      
//     </div>
//   );
// };


// export default Nav;
