import { useEffect, useState } from "react";

export const useApi = (url, transformData) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(!!url); // ⬅️ start true only if URL is given
  const [error, setError] = useState(null);

  // 🔹 GET request when URL provided
  useEffect(() => {
    if (!url) return;

    let isMounted = true;

    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const json = await res.json();
        const finalData = transformData ? transformData(json) : json;

        if (isMounted) {
          setData(finalData);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          setLoading(false);
        }
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, [url, transformData]);

  // 🔹 POST method
  const post = async (postUrl, body, postTransformData) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(postUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

      const json = await res.json();
      const finalData = postTransformData ? postTransformData(json) : json;

      setData(finalData);
      return { data: finalData, error: null };
    } catch (err) {
      setError(err.message);
      return { data: null, error: err.message };
    } finally {
      setLoading(false); // ✅ make sure we always stop loading
    }
  };

  return { data, loading, error, post };
};
