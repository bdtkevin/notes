import { NavLink, Link } from 'react-router-dom';
import SHeader from './styled/SHeader';

export default function Header({ darkmode, setDarkmode }) {
  return (
    <SHeader darkmode={darkmode}>
      <button type='button' className='button-logo'>
        <Link to='/'>
          <svg
            width='100'
            viewBox='0 0 149 59'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M62.3941 46.9988H43.1707C42.5241 46.9988 42 46.4746 42 45.8281V16.1707C42 15.5241 42.5241 15 43.1707 15H72.8281C73.4746 15 73.9988 15.5241 73.9988 16.1707V35.3941C73.9988 35.7046 73.8754 36.0023 73.6558 36.2219L63.2219 46.6559C63.0024 46.8754 62.7047 46.9988 62.3941 46.9988Z'
              fill='#FFDA79'
            />
            <path
              d='M72.8279 15.0006H57.9993V46.9993H62.394C62.7046 46.9993 63.0023 46.876 63.2218 46.6565L73.6557 36.2225C73.8753 36.003 73.9986 35.7052 73.9986 35.3947V16.1713C73.9986 15.5247 73.4745 15.0006 72.8279 15.0006Z'
              fill='#FFD155'
            />
            <path
              d='M66.6224 24.8153H49.3763C48.7298 24.8153 48.2056 24.2912 48.2056 23.6446C48.2056 22.9981 48.7297 22.4739 49.3763 22.4739H66.6224C67.2689 22.4739 67.7931 22.9981 67.7931 23.6446C67.7931 24.2912 67.2689 24.8153 66.6224 24.8153Z'
              fill='#FFD155'
            />
            <path
              d='M66.6224 31.0361H49.3763C48.7298 31.0361 48.2056 30.512 48.2056 29.8654C48.2056 29.2189 48.7297 28.6947 49.3763 28.6947H66.6224C67.2689 28.6947 67.7931 29.2189 67.7931 29.8654C67.7931 30.512 67.2689 31.0361 66.6224 31.0361Z'
              fill='#FFD155'
            />
            <path
              d='M62.3939 46.9994C61.7494 46.9994 61.2235 46.4762 61.2235 45.8287V35.3947C61.2235 34.7482 61.7476 34.2241 62.3942 34.2241H72.8281C73.8669 34.2241 74.3929 35.4855 73.6558 36.2226L63.2219 46.6565C62.998 46.8804 62.6985 46.9994 62.3939 46.9994Z'
              fill='#FFC72D'
            />
            <path
              d='M66.6225 22.4739H57.9994V24.8153H66.6225C67.269 24.8153 67.7931 24.2912 67.7931 23.6446C67.7931 22.9981 67.269 22.4739 66.6225 22.4739Z'
              fill='#FFC72D'
            />
            <path
              d='M66.6225 28.6947H57.9994V31.0361H66.6225C67.269 31.0361 67.7931 30.512 67.7931 29.8654C67.7931 29.2189 67.269 28.6947 66.6225 28.6947Z'
              fill='#FFC72D'
            />
            <path
              d='M31.4453 47H26.7334L8.83789 19.6074V47H4.12598V11.4531H8.83789L26.7822 38.9678V11.4531H31.4453V47Z'
              className='txt-logo'
            />
            <path
              d='M89.5459 14.1875V20.584H94.4775V24.0752H89.5459V40.457C89.5459 41.515 89.7656 42.3125 90.2051 42.8496C90.6445 43.3704 91.3932 43.6309 92.4512 43.6309C92.972 43.6309 93.6882 43.5332 94.5996 43.3379V47C93.4115 47.3255 92.2559 47.4883 91.1328 47.4883C89.1146 47.4883 87.5928 46.8779 86.5674 45.6572C85.542 44.4365 85.0293 42.7031 85.0293 40.457V24.0752H80.2197V20.584H85.0293V14.1875H89.5459ZM110.737 47.4883C107.157 47.4883 104.243 46.3164 101.997 43.9727C99.751 41.6126 98.6279 38.4632 98.6279 34.5244V33.6943C98.6279 31.0739 99.1243 28.7383 100.117 26.6875C101.126 24.6204 102.526 23.0091 104.316 21.8535C106.123 20.6816 108.076 20.0957 110.176 20.0957C113.61 20.0957 116.279 21.2269 118.184 23.4893C120.088 25.7516 121.04 28.9906 121.04 33.2061V35.0859H103.145C103.21 37.6901 103.966 39.7979 105.415 41.4092C106.88 43.0042 108.735 43.8018 110.981 43.8018C112.576 43.8018 113.927 43.4762 115.034 42.8252C116.141 42.1742 117.109 41.3115 117.939 40.2373L120.698 42.3857C118.485 45.7874 115.164 47.4883 110.737 47.4883ZM110.176 23.8066C108.353 23.8066 106.823 24.474 105.586 25.8086C104.349 27.127 103.584 28.9824 103.291 31.375H116.523V31.0332C116.393 28.7383 115.775 26.9642 114.668 25.7109C113.561 24.4414 112.064 23.8066 110.176 23.8066ZM141.67 39.9932C141.67 38.7725 141.206 37.8285 140.278 37.1611C139.367 36.4775 137.764 35.8916 135.469 35.4033C133.19 34.915 131.375 34.3291 130.024 33.6455C128.69 32.9619 127.697 32.1481 127.046 31.2041C126.411 30.2601 126.094 29.137 126.094 27.835C126.094 25.6702 127.005 23.8392 128.828 22.3418C130.667 20.8444 133.011 20.0957 135.859 20.0957C138.854 20.0957 141.279 20.8688 143.135 22.415C145.007 23.9613 145.942 25.9388 145.942 28.3477H141.401C141.401 27.1107 140.872 26.0446 139.814 25.1494C138.773 24.2542 137.454 23.8066 135.859 23.8066C134.215 23.8066 132.93 24.1647 132.002 24.8809C131.074 25.597 130.61 26.5329 130.61 27.6885C130.61 28.779 131.042 29.6009 131.904 30.1543C132.767 30.7077 134.321 31.2367 136.567 31.7412C138.83 32.2458 140.661 32.848 142.061 33.5479C143.46 34.2477 144.494 35.0941 145.161 36.0869C145.845 37.0635 146.187 38.2598 146.187 39.6758C146.187 42.0358 145.243 43.932 143.354 45.3643C141.466 46.7803 139.017 47.4883 136.006 47.4883C133.89 47.4883 132.018 47.1139 130.391 46.3652C128.763 45.6165 127.485 44.5749 126.558 43.2402C125.646 41.8893 125.19 40.4326 125.19 38.8701H129.707C129.788 40.3838 130.391 41.5882 131.514 42.4834C132.653 43.3623 134.15 43.8018 136.006 43.8018C137.715 43.8018 139.082 43.46 140.107 42.7764C141.149 42.0765 141.67 41.1488 141.67 39.9932Z'
              className='txt-logo'
            />
          </svg>
        </Link>
      </button>
      <nav>
        <ul>
          <li>
            <NavLink exact to='/' activeClassName='selected'>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to='/timeline' activeClassName='selected'>
              Timeline
            </NavLink>
          </li>
          <li>
            <NavLink to='/aboutus' activeClassName='selected'>
              About us
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' activeClassName='selected'>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <button
          type='button'
          className='button-darkmode'
          onClick={() => {
            setDarkmode(!darkmode);
          }}
        >
          darkmode
        </button>
      </div>
    </SHeader>
  );
}