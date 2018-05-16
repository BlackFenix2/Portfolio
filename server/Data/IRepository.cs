using server.Helpers;
using server.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace server.Data
{
    public interface IRepository<T> where T : BaseEntity
    {
        Task<T> GetByIdAsync(Guid id);

        Task<List<T>> ListAsync(ResourceParameters resource);

        Task<T> AddAsync(T entity);

        Task UpdateAsync(T entity);

        Task DeleteAsync(T entity);

        Task DeleteAsync(Guid id);
    }
}