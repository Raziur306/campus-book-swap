import {
  SearchResultContentCardWrapper,
  StyledFloatingMenuContainer,
  StyledFloatingMenuItem,
  StyledTopBarAvatarWrapper,
  StyledTopBarDateTimeText,
  StyledTopBarDateWrapper,
  StyledTopBarProfileText,
  StyledTopBarProfileWrapper,
  StyledTopBarSearch,
} from "@/styled/topbarStyles";
import Image from "next/image";
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Calendar from "../../public/svg/calendar.svg";
import Clock from "../../public/svg/clock.svg";
import ArrowDown from "../../public/svg/arrowDown.svg";
import Link from "next/link";
import Settings from "@/public/svg/settings";
import Logout from "@/public/svg/logout";
import { cookies } from "@/config/Cookies";
import { useRouter } from "next/navigation";
import { CommonApiContext } from "@/context/CommonApiContext";
import { SearchBookWrapper, ShowSearchResultContainer } from "@/styled";

const TopBar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [formattedDate, setFormattedDate] = useState("");
  const [formattedTime, setFormattedTime] = useState("");
  const { getProfileInfoCall, profileInfo } = useContext(CommonApiContext);
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const { bookList } = useContext(CommonApiContext);
  const [filteredBookList, setFilteredBookList] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    getProfileInfoCall();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      setFormattedTime(
        currentTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
      setFormattedDate(
        currentTime.toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  const handleClickOutside = useCallback(
    (event: any) => {
      if (
        isOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        toggleMenu();
      }
    },
    [isOpen, toggleMenu]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  const handleLogoutClick = () => {
    cookies.remove("user_token");
    router.refresh();
  };

  useEffect(() => {
    const searchText = searchValue.toLowerCase();
    const regex = new RegExp(searchText, "i");
    setFilteredBookList(
      bookList.filter((item: any) => {
        return regex.test(item.title.toLowerCase());
      })
    );
  }, [searchValue]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [searchValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsResultModalOpen(e.target.value.length > 0);
    setSearchValue(e.target.value);
    setIsLoading(true);
  };

  const handleBookItemClick = (bookId: string) => {
    setIsResultModalOpen(false);
    setSearchValue("");
    router.push(`/book-details/${bookId}`);
  };

  return (
    <div className="flex flex-row justify-between mt-5  items-center p-5 sticky top-0 backdrop-blur-sm z-10">
      <SearchBookWrapper>
        <StyledTopBarSearch
          onChange={handleSearchChange}
          placeholder="Search book..."
          type="text"
          value={searchValue}
        />
        <ShowSearchResultContainer $isResultModalOpen={isResultModalOpen}>
          {isLoading && (
            <div className="flex p-3 flex-row items-center gap-5">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 dark:text-gray-400 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <p>Searching....</p>
            </div>
          )}
          {!isLoading && (
            <div className="flex flex-col">
              {filteredBookList.map((book: any, index: number) => {
                const { id, title, authorName, coverImg } = book;
                return (
                  <SearchResultContentCardWrapper
                    onClick={() => handleBookItemClick(id)}
                    key={index}
                  >
                    <Image width={50} height={50} src={coverImg} alt={title} />
                    <div className="flex flex-col gap-1">
                      <h3>{title}</h3>
                      <p>{authorName}</p>
                    </div>
                  </SearchResultContentCardWrapper>
                );
              })}
            </div>
          )}

          {!isLoading && filteredBookList.length == 0 && (
            <span className="flex m-auto w-full h-full justify-center items-center">
              No result found
            </span>
          )}
        </ShowSearchResultContainer>
      </SearchBookWrapper>
      <StyledTopBarDateWrapper className="flex flex-row gap-10">
        <div className="flex flex-row gap-2 items-center">
          <Clock />
          <StyledTopBarDateTimeText>{formattedTime}</StyledTopBarDateTimeText>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <Calendar />
          <StyledTopBarDateTimeText>{formattedDate}</StyledTopBarDateTimeText>
        </div>
      </StyledTopBarDateWrapper>

      <StyledTopBarProfileWrapper
        ref={modalRef}
        onClick={toggleMenu}
        $isFloatingMenuOpen={isOpen}
        className="flex flex-row gap-1 items-center"
      >
        <StyledTopBarAvatarWrapper>
          <Image
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className=" max-w-[2.5rem] max-h-[2.5rem] rounded-full"
            src={profileInfo?.image || "/images/default.jpg"}
            alt="Rounded avatar"
          />
        </StyledTopBarAvatarWrapper>
        <StyledTopBarProfileText>{profileInfo?.name}</StyledTopBarProfileText>
        <ArrowDown className={"mr-[1rem] ml-[1rem] rotate-0 transition"} />
        <StyledFloatingMenuContainer $isFloatingMenuOpen={isOpen}>
          <Link href="/profile">
            <StyledFloatingMenuItem>
              <Settings />
              <span>Settings</span>
            </StyledFloatingMenuItem>
          </Link>
          <StyledFloatingMenuItem onClick={handleLogoutClick}>
            <Logout />
            <span>Logout</span>
          </StyledFloatingMenuItem>
        </StyledFloatingMenuContainer>
      </StyledTopBarProfileWrapper>
    </div>
  );
};

export default TopBar;
