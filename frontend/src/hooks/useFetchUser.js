import { useEffect, useState } from "react";
import axios from "axios";

const useFetchUser = (token, setUser) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      if (token) {
        try {
          const res = await axios.get(
            "http://localhost:3000/api/user/userInfo",
            {
              headers: { token },
            }
          );
          if (res.data.success) {
            setUser(res.data.user);
          } else {
            console.error("Failed to fetch user details");
          }
        } catch (error) {
          console.error("Error fetching user information", error);
        }
        setLoading(false);
      }
    };
    fetchUser();
  }, [token, setUser]);

  return loading;
};

export default useFetchUser;
