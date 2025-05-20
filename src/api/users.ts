import { User, UserStatus } from '@/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const USERS_KEYS = {
  users: 'USERS',
};

interface UpdatedUserStatus {
  id: number;
  status: UserStatus;
}

export const getUsers = async (): Promise<User[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`);
  return response.json();
};

export const updateUserStatus = ({ id, status }: UpdatedUserStatus) => {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ status }),
  });
};

export const useGetUsers = () => {
  return useQuery({
    queryKey: [USERS_KEYS.users],
    queryFn: getUsers,
  });
};

export const useUpdateUserStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateUserStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [USERS_KEYS.users] });
    },
  });
};
