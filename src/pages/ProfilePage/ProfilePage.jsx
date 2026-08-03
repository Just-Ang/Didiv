import {
  Card,
  Title,
  Label,
  Input,
  SaveButton,
} from "./ProfilePage.styled";

import { useEffect, useState } from "react";

export const ProfilePage = () => {
 const [form, setForm] = useState({
  username: "",
  email: "",
  phone: "",
});

useEffect(() => {
  const fetchUser = async () => {
    const token = localStorage.getItem("token");

    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/users/me`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await res.json();

    setForm({
      username: data.username || "",
      email: data.email || "",
      phone: data.phone || "",
    });
  };

  fetchUser();
}, []);



  return (
    <Card>
      <Title>Особисті дані</Title>

      <Label>
        Ім я
      <Input
  value={form.username}
  onChange={e =>
    setForm(prev => ({
      ...prev,
      username: e.target.value,
    }))
  }
/>
      </Label>

      <Label>
        Email
      <Input
  value={form.email}
  onChange={e =>
    setForm(prev => ({
      ...prev,
      email: e.target.value,
    }))
  }
/>
      </Label>

      <Label>
        Телефон

        <Input
  value={form.phone || ""}
  onChange={e =>
    setForm(prev => ({
      ...prev,
      email: e.target.value,
    }))
  }
/>
      </Label>

      <SaveButton>Зберегти</SaveButton>
    </Card>
  );
};