using server.Helpers;
using server.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace server.Data
{
    public interface IRepository<T> where T : BaseEntity
    {



        /// <summary>
        /// Find a single Entity, does not track
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<bool> FindByIdAsync(Guid id);


        /// <summary>
        /// Get a single Entity
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<T> GetByIdAsync(Guid id);

        /// <summary>
        /// Get a list of Entities
        /// </summary>
        /// <param name="resource"></param>
        /// <returns></returns>
        Task<List<T>> ListAsync(ResourceParameters resource);

        /// <summary>
        /// Get a Paged list of Entities
        /// </summary>
        /// <param name="resource"></param>
        /// <returns></returns>
        Task<PagedList<T>> PagedListAsync(ResourceParameters resource);


        /// <summary>
        /// Add an Entity
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        Task<T> AddAsync(T entity);

        /// <summary>
        /// Update an Entity
        /// </summary>
        /// <param name="entity">The Entity</param>
        /// <returns></returns>
        Task UpdateAsync(T entity);


        /// <summary>
        /// Update an Entity
        /// </summary>
        /// <param name="id">The Entity GUID</param>
        /// <param name="entity">The Entity(minus the GUID)</param>
        /// <returns></returns>
        Task UpdateAsync(Guid id, T entity);


        /// <summary>
        /// Delete an Entity given the object
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        Task DeleteAsync(T entity);


        /// <summary>
        /// Delete an Entity given the GUID
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task DeleteAsync(Guid id);
    }
}